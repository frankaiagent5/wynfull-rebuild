document.getElementById('year').textContent = new Date().getFullYear()

// Set your explanation video URL here.
// Supports YouTube embed links and direct mp4 in iframe-compatible hosts.
const videoUrl = 'https://drive.google.com/file/d/1ZAl6qflrHUus4FB_VgqzVmUKWriLqqCm/preview'

const frame = document.getElementById('explanationVideo')
if (videoUrl) {
  frame.src = videoUrl
} else {
  frame.src = 'about:blank'
}
