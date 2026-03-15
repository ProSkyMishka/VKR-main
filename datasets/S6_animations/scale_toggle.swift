import SwiftUI
struct ContentView: View {
    @State private var big = false
    var body: some View {
        Text("Scale")
            .scaleEffect(big ? 2 : 1)
            .animation(.easeInOut, value: big)
        Button("Toggle") { big.toggle() }
    }
}
