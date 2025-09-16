<?php
// Contact Form Handler for Texas2Success
// Upload this file to your GoDaddy hosting and update the form action in index.html

// Prevent direct access
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit();
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validation
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email)) {
    $errors[] = 'Email is required';
} elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address';
}

if (empty($subject)) {
    $errors[] = 'Subject is required';
}

if (empty($message)) {
    $errors[] = 'Message is required';
}

// If there are errors, redirect back with error message
if (!empty($errors)) {
    $error_message = implode(', ', $errors);
    header('Location: index.html?error=' . urlencode($error_message) . '#contact');
    exit();
}

// Email configuration
$to = 'info@texas2success.com'; // CHANGE THIS TO YOUR EMAIL
$email_subject = 'New Contact Form Submission: ' . $subject;

// Email headers
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Email body
$email_body = "
<html>
<head>
    <title>New Contact Form Submission</title>
</head>
<body>
    <h2>New Contact Form Submission from Texas2Success Website</h2>
    <table>
        <tr>
            <td><strong>Name:</strong></td>
            <td>$name</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>$email</td>
        </tr>
        <tr>
            <td><strong>Subject:</strong></td>
            <td>$subject</td>
        </tr>
        <tr>
            <td><strong>Message:</strong></td>
            <td>" . nl2br(htmlspecialchars($message)) . "</td>
        </tr>
    </table>
    <br>
    <p><em>This message was sent from the contact form on your Texas2Success website.</em></p>
</body>
</html>
";

// Send email
$mail_sent = mail($to, $email_subject, $email_body, $headers);

// Log the submission (optional)
$log_entry = date('Y-m-d H:i:s') . " - Name: $name, Email: $email, Subject: $subject\n";
file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);

// Redirect back with success or error message
if ($mail_sent) {
    header('Location: index.html?success=1#contact');
} else {
    header('Location: index.html?error=' . urlencode('Failed to send message. Please try again.') . '#contact');
}
exit();
?> 