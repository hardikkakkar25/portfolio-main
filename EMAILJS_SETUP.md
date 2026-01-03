# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the template below and customize as needed

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find **API Keys** section
3. Copy your **Public Key** (e.g., `abc123def456`)

## Step 5: Configure Environment Variables
1. Copy `.env.local` file
2. Replace the placeholder values with your actual keys:
   ```
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   ```

## EmailJS Template Code

### Template Subject:
```
New Project Inquiry from {{from_name}}
```

### Template Body (HTML):
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">New Project Inquiry</h1>
  </div>
  
  <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
    
    <div style="margin-bottom: 20px;">
      <h2 style="color: #667eea; margin-top: 0;">Contact Information</h2>
      <p style="margin: 5px 0;"><strong>Name:</strong> {{from_name}}</p>
      <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:{{from_email}}" style="color: #667eea;">{{from_email}}</a></p>
    </div>
    
    <div style="margin-bottom: 20px; padding: 15px; background: white; border-radius: 5px; border-left: 4px solid #667eea;">
      <h3 style="color: #333; margin-top: 0;">Project Details</h3>
      <p style="margin: 5px 0;"><strong>Project Type:</strong> {{project_type}}</p>
      <p style="margin: 5px 0;"><strong>Budget Range:</strong> {{budget}}</p>
      <p style="margin: 5px 0;"><strong>Timeline:</strong> {{timeline}}</p>
    </div>
    
    <div style="margin-bottom: 20px;">
      <h3 style="color: #333;">Message</h3>
      <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0; white-space: pre-wrap;">{{message}}</div>
    </div>
    
    <div style="text-align: center; margin-top: 30px;">
      <a href="mailto:{{from_email}}?subject=Re: Project Inquiry - {{project_type}}" 
         style="display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
        Reply to {{from_name}}
      </a>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
    
    <p style="color: #666; font-size: 12px; text-align: center; margin: 0;">
      This email was sent from your portfolio contact form.
    </p>
    
  </div>
  
</body>
</html>
```

### Template Body (Plain Text Alternative):
```
New Project Inquiry from {{from_name}}

Contact Information:
Name: {{from_name}}
Email: {{from_email}}

Project Details:
Project Type: {{project_type}}
Budget Range: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
Reply to: {{from_email}}
This email was sent from your portfolio contact form.
```

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{project_type}}` - Selected project type
- `{{budget}}` - Selected budget range
- `{{timeline}}` - Selected timeline
- `{{message}}` - Project details message

## Notes:
- The template uses HTML for better formatting
- Make sure to use the exact variable names: `{{variable_name}}`
- Test your template using the "Test" button in EmailJS dashboard
- The template supports both HTML and plain text formats

