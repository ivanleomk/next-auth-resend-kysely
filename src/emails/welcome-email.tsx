import * as React from 'react';

interface EmailTemplateProps {
  loginUrl: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  loginUrl,
}) => (
  <div>
    <h1>Welcome to Brain Dump</h1>
    <p>Log in <a href={loginUrl}>here</a> or use this url - {loginUrl}</p>
  </div>
);