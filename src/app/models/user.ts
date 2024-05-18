export interface Student {
    name: string;
    country: string;
    region: string;
    total: number;
    completed: number;
    learningTime: string;
    rank: number;
  }
  
  export const STUDENTS: Student[] = [
    {
      name: 'kattamen', // Maqsudkhan😎
    //student ismi bilan bir xil bo`lishikerak rasm nomi va format png.        
      country: 'Uzbekistan',
      region: 'Qashqadaryo',
      total: 45321,
      completed: 245,
      learningTime: '240h 39m',
      rank: 1
    },
    {
        name: 'conan', 
        country: 'Uzbekistan',
        region: 'Fargona',
        total: 3201,
        completed: 135,
        learningTime: '131h 41m',
        rank: 2
      },
      {
        name: 'hasker', 
        country: 'Uzbekistan',
        region: 'Namangan',
        total: 1245,
        completed: 190,
        learningTime: '255h 41m',
        rank: 3
      },
    // Add more student objects as needed
  ];