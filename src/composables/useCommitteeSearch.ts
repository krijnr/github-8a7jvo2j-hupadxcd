import { ref, computed } from 'vue'
import { useAppStore } from '@/stores'
import type { Committee } from '@/types/committee'

export function useCommitteeSearch() {
  const store = useAppStore()
  const searchQuery = ref('')

  const filteredCommittees = computed(() => {
    const query = searchQuery.value.toLowerCase()
    if (!query) return store.committees

    return store.committees.filter(committee => {
      const matchesCommitteeName = committee.name.toLowerCase().includes(query)
      const matchesMemberName = committee.members.some(
        member => member.name.toLowerCase().includes(query)
      )
      return matchesCommitteeName || matchesMemberName
    })
  })

  return {
    searchQuery,
    filteredCommittees
  }
}