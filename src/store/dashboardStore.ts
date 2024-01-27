import { LoginParams, User, RegisterParams } from '@/domain/entities/User';
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';
import { Note } from '@/domain/entities/Note';

interface DashboardState {}

const useDashboardStore = create<DashboardState>()(devtools((set) => ({})));

export default useDashboardStore;
