import { Resend } from 'resend';

// Lazy instantiation - solo crea la instancia cuando se necesita
let resendInstance: Resend | null = null;

function getResendInstance(): Resend {
  if (!resendInstance) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }
    resendInstance = new Resend(process.env.RESEND_API_KEY);
  }
  return resendInstance;
}

export async function sendClassAssignmentEmail(
  to: string,
  alumnoName: string,
  classData: any,
  confirmToken: string
) {
  const confirmUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/confirm/${confirmToken}`;

  try {
    const resend = getResendInstance();
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'AppTrainer <noreply@apptrainer.cl>',
      to,
      subject: `Nueva clase asignada - ${classData.title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">¡Nueva Clase Asignada!</h1>
          </div>

          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #374151; margin-bottom: 20px;">
              Hola <strong>${alumnoName}</strong>,
            </p>

            <p style="font-size: 16px; color: #374151; margin-bottom: 30px;">
              Has sido asignado a una nueva clase. Por favor confirma tu asistencia.
            </p>

            <div style="background: white; padding: 25px; border-radius: 8px; margin-bottom: 30px; border-left: 4px solid #22c55e;">
              <h2 style="color: #1f2937; margin-top: 0; font-size: 22px;">${classData.title}</h2>

              <div style="margin: 15px 0;">
                <p style="margin: 8px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">📅 Fecha:</strong> ${new Date(classData.date).toLocaleDateString('es-CL', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p style="margin: 8px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">🕐 Hora:</strong> ${classData.startTime}
                </p>
                <p style="margin: 8px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">⏱ Duración:</strong> ${classData.duration} minutos
                </p>
                <p style="margin: 8px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">📍 Ubicación:</strong> ${classData.locationName}
                </p>
                <p style="margin: 8px 0; color: #4b5563;">
                  <strong style="color: #1f2937;">💰 Precio:</strong> $${classData.price.toLocaleString('es-CL')}
                </p>
              </div>
            </div>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${confirmUrl}"
                 style="display: inline-block;
                        background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
                        color: white;
                        padding: 16px 40px;
                        text-decoration: none;
                        border-radius: 8px;
                        font-weight: bold;
                        font-size: 16px;
                        box-shadow: 0 4px 6px rgba(34, 197, 94, 0.3);">
                ✓ Confirmar Asistencia
              </a>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 5px 0;">
                Si no puedes hacer clic en el botón, copia y pega este enlace en tu navegador:
              </p>
              <p style="color: #3b82f6; font-size: 12px; word-break: break-all; margin: 10px 0;">
                ${confirmUrl}
              </p>
            </div>

            <div style="margin-top: 30px; padding: 20px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>⚠️ Importante:</strong> Por favor confirma tu asistencia lo antes posible.
                Puedes cancelar hasta ${classData.cancellationPolicy || '12 horas antes del inicio'}.
              </p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px; color: #9ca3af; font-size: 12px;">
            <p>AppTrainer - Entrena donde quieras</p>
            <p>Este es un correo automático, por favor no respondas a este mensaje.</p>
          </div>
        </div>
      `
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}

export async function sendWelcomeEmail(to: string, name: string, role: string) {
  try {
    const resend = getResendInstance();
    await resend.emails.send({
      from: process.env.FROM_EMAIL || 'AppTrainer <noreply@apptrainer.cl>',
      to,
      subject: '¡Bienvenido a AppTrainer!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #22c55e;">¡Bienvenido ${name}!</h1>
          <p>Gracias por registrarte en AppTrainer como ${role === 'ENTRENADOR' ? 'Entrenador' : 'Alumno'}.</p>
          <p>Ahora puedes comenzar a ${role === 'ENTRENADOR' ? 'gestionar tus clases y grupos' : 'explorar clases y entrenamientos'}.</p>
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard"
             style="display: inline-block; background: #22c55e; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin-top: 20px;">
            Ir al Dashboard
          </a>
        </div>
      `
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}
