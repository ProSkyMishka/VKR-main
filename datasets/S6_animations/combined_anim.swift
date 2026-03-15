import SwiftUI
struct ContentView: View {
    @State private var on = false
    var body: some View {
        Text("Combo")
            .opacity(on ? 1 : 0.5)
            .scaleEffect(on ? 1.2 : 1)
            .animation(.easeInOut, value: on)
        Button("Toggle") { on.toggle() }
    }
}
