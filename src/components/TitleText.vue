<template>
  <div>
    <p class="slot-text" ref="slotText" :class="{'is-animating': isAnimating}">{{ displayText }}</p>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';

  const isAnimating = ref(false);

  const finalText: string = 'Moomin';
  // 英数字からランダム文字を生成
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  
  const displayText = ref<string>('');
  let intervalId: number | null = null;

  function getRandomChar(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  // スロットのアニメーションを開始
  function statSlot(): void {
    let count  = 0;
    intervalId = window.setInterval(() => {
      if( count < 15) {
        displayText.value = getRandomChar(finalText.length); // ランダム文字を表示
        triggerAnimation();
        count++;
      } else {
        clearInterval(intervalId!);
        displayText.value = finalText;
      }
    }, 100);
  }

  function triggerAnimation(){
    isAnimating.value = false;
    requestAnimationFrame(() => {
      isAnimating.value = true;
    });
  }

  onMounted(() => {
    statSlot();
  });
  // コンポーネントがアンマウントされるときにインターバルをクリア
  onBeforeUnmount(() => {
    if (intervalId !== null) {
      clearInterval(intervalId)
    }
  })
</script>

<style scoped>
.slot-text {
  font-size: 28px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 0.05em;
  white-space: nowrap;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(0);
}
.is-animating {
  opacity: 1;
  transform: translateY(-4px);
}
</style>