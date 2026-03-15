import SwiftUI
struct CounterChild: View {
    @Binding var count: Int
    var body: some View {
        VStack {
            Text("\(count)")
            Button("+") { count += 1 }
        }
    }
}
struct ContentView: View {
    @State private var count = 0
    var body: some View {
        CounterChild(count: $count)
    }
}
