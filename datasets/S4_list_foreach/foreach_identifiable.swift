import SwiftUI
struct TaskItem: Identifiable { let id = UUID(); var name: String }
struct ContentView: View {
    let tasks = [TaskItem(name: "A"), TaskItem(name: "B")]
    var body: some View {
        List(tasks) { t in Text(t.name) }
    }
}
