export function verifyEmailHtml({
  user,
  url,
}: {
  user: { name?: string; email: string };
  url: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 1px 4px #0001; padding: 32px;">
      <h2 style="color: #222; margin-bottom: 16px;">Verify Your Email Address</h2>
      <p>Hello${user.name ? `, ${user.name}` : ""},</p>
      <p>Thank you for signing up! Please verify your email address associated with <strong>${user.email}</strong> to activate your account.</p>
      <p>Click the button below to verify your email address:</p>
      <a href="${url}" style="display:inline-block; background:#22c55e; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; margin:16px 0;">Verify Email</a>
      <p style="font-size:13px; color:#666;">If the button doesn't work, copy and paste this link into your browser:<br/><a href="${url}" style="color:#2563eb;">${url}</a></p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
      <p style="font-size:12px; color:#999;">If you didn't request this, you can ignore this email.</p>
    </div>
  `;
}
