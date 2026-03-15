import SwiftUI
struct ContentView: View {
    @State private var visible = true
    var body: some View {
        VStack {
            Text("Hi").opacity(visible ? 1 : 0).animation(.easeOut, value: visible)
            Button("Hide/Show") { visible.toggle() }
        }
    }
}
