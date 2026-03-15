import SwiftUI
struct ChildView: View {
    @Binding var count: Int
    var body: some View {
        Button("Child +1") { count += 1 }
    }
}
struct ContentView: View {
    @State private var count = 0
    var body: some View {
        VStack {
            Text("\(count)")
            ChildView(count: $count)
        }
    }
}
