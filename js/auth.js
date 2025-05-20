// auth.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://yucposuraievbjmfeqxc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1Y3Bvc3VyYWlldmJqbWZlcXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2ODMzNDEsImV4cCI6MjA2MzI1OTM0MX0.kKIDnJX227SwOKWsd56L1QX3-ZAZzbAEGDVkCFlCDPE';
const supabase = createClient(supabaseUrl, supabaseKey);

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("login-btn");
  const modal = document.getElementById("login-modal");
  const closeBtn = document.getElementById("close-login");
  const emailLoginBtn = document.getElementById("email-login");
  const googleBtn = document.getElementById("google-login");
  const githubBtn = document.getElementById("github-login");

  loginBtn.addEventListener("click", () => modal.style.display = "flex");
  closeBtn.addEventListener("click", () => modal.style.display = "none");

  emailLoginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login failed: " + error.message);
    } else {
      alert("Login successful!");
      modal.style.display = "none";
    }
  });

  googleBtn.addEventListener("click", async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  });

  githubBtn.addEventListener("click", async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  });
});
