
import { categories } from "./categories";

export const TASKS = Array.from({ length: 24 }, (_, index) => ({
    id: Symbol(`task ${index + 1}`),
    title: [
        'New task', 'Side task', 'New task', 'Another side task', 'Prepare project report',
        'Call client for feedback', 'Plan team meeting', 'Organize desk', 'Review code',
        'Grocery shopping', 'Morning workout', 'Read a book', 'Call a friend', 'Cook dinner',
        'Complete online course', 'Write essay', 'Revise math concepts', 'Attend workshop',
        'Prepare for quiz', 'Update resume', 'Plan weekend trip', 'Watch documentary',
        'Declutter wardrobe', 'Practice coding'
    ][index],
    description: [
        'Something interesting', 'Not interesting', 'Meh', "This I've done", 'Compile and format the final project report',
        'Discuss project progress and gather feedback', 'Set agenda and schedule for the upcoming team meeting', 'Clean and arrange workspace for better productivity', 'Check and optimize the recent code changes',
        'Buy vegetables, fruits, and essentials for the week', 'Do a 30-minute strength training session', 'Finish at least two chapters of the current book', 'Catch up with an old friend over a call', 'Try a new recipe for dinner tonight',
        'Finish the pending module on JavaScript basics', 'Draft an essay on climate change for class submission', 'Practice algebra and calculus problems', 'Join an online seminar on career development',
        'Review notes and practice questions for upcoming quiz', 'Add recent projects and skills to resume', 'Research destinations and book accommodations', 'Learn something new from an educational documentary',
        'Sort out and donate unused clothes', 'Solve at least 3 coding challenges on LeetCode'
    ][index],
    category: [
        categories[0].name, categories[2].name, categories[1].name, categories[0].name,
        categories[0].name, categories[0].name, categories[0].name, categories[0].name,
        categories[0].name, categories[2].name, categories[2].name, categories[2].name,
        categories[2].name, categories[2].name, categories[1].name, categories[1].name,
        categories[1].name, categories[1].name, categories[1].name, categories[0].name,
        categories[2].name, categories[1].name, categories[2].name, categories[1].name
    ][index],
    isCompleted: Math.random() < 0.5
}));

