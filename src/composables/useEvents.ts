import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'
import { format, parseISO, isFuture } from 'date-fns'

export function useEvents() {
  const store = useAppStore()
  const { events } = storeToRefs(store)

  const upcomingEvents = computed(() => {
    return events.value
      .filter(event => event.status === 'upcoming' && isFuture(parseISO(event.date)))
      .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime())
  })

  const formatEventDate = (date: string) => {
    return format(parseISO(date), 'MMMM d, yyyy')
  }

  return {
    upcomingEvents,
    formatEventDate
  }
}