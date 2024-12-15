import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Committee } from '@/types/committee'
import type { Budget } from '@/types/budget'
import type { Event } from '@/types/event'

export const useAppStore = defineStore('app', () => {
  const committees = ref<Committee[]>([
    { id: 1, name: 'Executive Board', members: [
      { name: 'Jane Smith', role: 'President', email: 'jane@example.com' },
      { name: 'John Doe', role: 'Vice President', email: 'john@example.com' },
    ]},
    { id: 2, name: 'Fundraising Committee', members: [
      { name: 'Sarah Johnson', role: 'Chair', email: 'sarah@example.com' },
      { name: 'Mike Brown', role: 'Member', email: 'mike@example.com' },
    ]},
  ])

  const budget = ref<Budget>({
    total: 50000,
    spent: 15000,
    remaining: 35000,
    categories: [
      { name: 'Events', allocated: 20000, spent: 5000 },
      { name: 'Supplies', allocated: 15000, spent: 7000 },
      { name: 'Programs', allocated: 15000, spent: 3000 },
    ]
  })

  const events = ref<Event[]>([
    {
      id: 1,
      title: 'Spring Festival',
      date: '2024-04-15',
      description: 'Annual spring celebration with games and activities',
      location: 'School Playground',
      committee: 'Events Committee',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Teacher Appreciation Week',
      date: '2024-05-01',
      description: 'Week-long celebration honoring our teachers',
      location: 'School Campus',
      committee: 'Executive Board',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Summer Book Fair',
      date: '2024-06-10',
      description: 'Annual book fair fundraising event',
      location: 'School Library',
      committee: 'Fundraising Committee',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'End of Year Celebration',
      date: '2024-06-20',
      description: 'Celebrating the end of the school year',
      location: 'School Auditorium',
      committee: 'Events Committee',
      status: 'upcoming'
    }
  ])

  return {
    committees,
    budget,
    events,
  }
})