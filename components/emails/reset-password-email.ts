export function resetPasswordHtml({
  user,
  url,
}: {
  user: { name?: string; email: string };
  url: string;
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #fff; border-radius: 8px; box-shadow: 0 1px 4px #0001; padding: 32px;">
      <h2 style="color: #222; margin-bottom: 16px;">Reset Your Password</h2>
      <p>Hello${user.name ? `, ${user.name}` : ""},</p>
      <p>We received a request to reset the password for your account associated with <strong>${user.email}</strong>.</p>
      <p>Click the button below to create a new password:</p>
      <a href="${url}" style="display:inline-block; background:#2563eb; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; margin:16px 0;">Reset Password</a>
      <p style="font-size:13px; color:#666;">If the button doesn't work, copy and paste this link into your browser:<br/><a href="${url}" style="color:#2563eb;">${url}</a></p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
      <p style="font-size:12px; color:#999;">If you didn't request this, you can ignore this email.</p>
    </div>
  `;
}
