/**
 * ============================================
 * ELDEN RING WIKI - MUSIC PLAYER
 * ============================================
 * A themed audio player with full controls
 */

class MusicPlayer {
  constructor() {
    // DOM Elements
    this.audioPlayer = document.getElementById('audioPlayer');
    this.playIcon = document.getElementById('playIcon');
    this.muteBtn = document.getElementById('muteBtn');
    this.volumeSlider = document.getElementById('volumeSlider');
    this.trackName = document.getElementById('trackName');
    this.trackInfo = document.getElementById('trackInfo');
    this.playerMinimized = document.getElementById('playerMinimized');
    this.playPauseBtn = document.getElementById('playPauseBtn');
    
    // State
    this.currentTrack = 1;
    this.totalTracks = 5; // Update this based on how many BGM files you have
    this.isPlaying = false;
    this.isMuted = false;
    this.previousVolume = 50;
    
    // Initialize
    this.init();
  }
  
  init() {
    // Set initial volume
    this.audioPlayer.volume = 0.5;
    
    // Event Listeners
    this.audioPlayer.addEventListener('error', (e) => this.handleError(e));
    this.audioPlayer.addEventListener('canplay', () => this.handleCanPlay());
    this.audioPlayer.addEventListener('ended', () => this.handleTrackEnd());
    this.audioPlayer.addEventListener('play', () => this.handlePlay());
    this.audioPlayer.addEventListener('pause', () => this.handlePause());
    
    // Load first track info
    this.updateTrackInfo();
    
    console.log('Music Player initialized');
    console.log('Total tracks:', this.totalTracks);
    console.log('Looking for files: bgm1.mp3 to bgm' + this.totalTracks + '.mp3');
  }
  
  // Toggle between minimized and expanded player
  togglePlayer() {
    const player = document.getElementById('musicPlayer');
    player.classList.toggle('minimized');
  }
  
  // Play/Pause toggle
  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
  
  // Play audio
  play() {
    const playPromise = this.audioPlayer.play();
    
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.isPlaying = true;
        this.playIcon.className = 'ra ra-lightning-bolt';
        this.playerMinimized.classList.add('playing');
        this.playPauseBtn.classList.add('playing');
        console.log('▶ Playing:', this.audioPlayer.src);
      }).catch(error => {
        console.error('❌ Playback failed:', error);
        this.showError();
      });
    }
  }
  
  // Pause audio
  pause() {
    this.audioPlayer.pause();
    this.isPlaying = false;
    this.playIcon.className = 'ra ra-play';
    this.playerMinimized.classList.remove('playing');
    this.playPauseBtn.classList.remove('playing');
    console.log('⏸ Paused');
  }
  
  // Next track
  nextTrack() {
    this.currentTrack = this.currentTrack >= this.totalTracks ? 1 : this.currentTrack + 1;
    this.loadTrack();
  }
  
  // Previous track
  previousTrack() {
    this.currentTrack = this.currentTrack <= 1 ? this.totalTracks : this.currentTrack - 1;
    this.loadTrack();
  }
  
  // Load a track
  loadTrack() {
    const wasPlaying = this.isPlaying;
    
    // Update the audio source
    this.audioPlayer.src = 'bgm' + this.currentTrack + '.mp3';
    this.audioPlayer.load();
    
    this.updateTrackInfo();
    console.log('📀 Loading:', this.audioPlayer.src);
    
    // Resume playing if it was playing before
    if (wasPlaying) {
      setTimeout(() => {
        this.play();
      }, 100);
    }
  }
  
  // Update track information display
  updateTrackInfo() {
    this.trackName.textContent = `Track ${this.currentTrack}`;
    this.trackInfo.textContent = 'Elden Ring OST';
  }
  
  // Change volume
  changeVolume(value) {
    this.audioPlayer.volume = value / 100;
    
    // Update mute button state based on volume
    if (value == 0) {
      this.muteBtn.classList.add('muted');
      this.muteBtn.innerHTML = '<i class="ra ra-cancel"></i>';
      this.isMuted = true;
    } else {
      this.muteBtn.classList.remove('muted');
      this.muteBtn.innerHTML = '<i class="ra ra-horn-call"></i>';
      this.isMuted = false;
    }
  }
  
  // Toggle mute
  toggleMute() {
    if (this.isMuted) {
      // Unmute
      this.audioPlayer.volume = this.previousVolume / 100;
      this.volumeSlider.value = this.previousVolume;
      this.muteBtn.classList.remove('muted');
      this.muteBtn.innerHTML = '<i class="ra ra-horn-call"></i>';
      this.isMuted = false;
      console.log('🔊 Unmuted');
    } else {
      // Mute
      this.previousVolume = this.volumeSlider.value;
      this.audioPlayer.volume = 0;
      this.volumeSlider.value = 0;
      this.muteBtn.classList.add('muted');
      this.muteBtn.innerHTML = '<i class="ra ra-cancel"></i>';
      this.isMuted = true;
      console.log('🔇 Muted');
    }
  }
  
  // Error handling
  handleError(e) {
    console.error('❌ Audio loading error:', e);
    console.log('Current source:', this.audioPlayer.src);
    console.log('Error type:', this.audioPlayer.error ? this.audioPlayer.error.code : 'Unknown');
  }
  
  showError() {
    alert(
      '⚠️ Unable to play audio\n\n' +
      'Please check:\n' +
      '1. File exists: bgm' + this.currentTrack + '.mp3\n' +
      '2. File is in the same folder as items.html\n' +
      '3. File name is spelled correctly (lowercase)\n' +
      '4. Browser supports MP3 format'
    );
  }
  
  // When audio can play
  handleCanPlay() {
    console.log('✅ Audio ready:', this.audioPlayer.src);
  }
  
  // When track ends
  handleTrackEnd() {
    console.log('⏭ Track ended, loading next...');
    this.nextTrack();
  }
  
  // When audio starts playing
  handlePlay() {
    this.isPlaying = true;
  }
  
  // When audio is paused
  handlePause() {
    this.isPlaying = false;
  }
}

// Initialize the music player when DOM is ready
let musicPlayer;

document.addEventListener('DOMContentLoaded', function() {
  musicPlayer = new MusicPlayer();
  
  // Start minimized
  document.getElementById('musicPlayer').classList.add('minimized');
});

// Global functions for HTML onclick events
function togglePlayer() {
  musicPlayer.togglePlayer();
}

function togglePlayPause() {
  musicPlayer.togglePlayPause();
}

function nextTrack() {
  musicPlayer.nextTrack();
}

function previousTrack() {
  musicPlayer.previousTrack();
}

function changeVolume(value) {
  musicPlayer.changeVolume(value);
}

function toggleMute() {
  musicPlayer.toggleMute();
}