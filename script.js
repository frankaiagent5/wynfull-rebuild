document.getElementById('year').textContent = new Date().getFullYear()

const videoUrl = 'https://drive.google.com/file/d/1ZAl6qflrHUus4FB_VgqzVmUKWriLqqCm/preview'
const frame = document.getElementById('explanationVideo')
frame.src = videoUrl || 'about:blank'

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('show')
    })
  },
  { threshold: 0.12 },
)

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
