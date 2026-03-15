import SwiftUI
struct ContentView: View {
    @State private var show = true
    var body: some View {
        VStack {
            if show {
                Text("Visible").transition(.opacity)
            }
            Button("Toggle") {
                withAnimation(.easeInOut(duration: 0.3)) { show.toggle() }
            }
        }
    }
}
