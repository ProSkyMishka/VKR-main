import SwiftUI
struct ContentView: View {
    @State private var show = true
    var body: some View {
        VStack {
            if show { Text("Content").transition(.opacity) }
            Button("Toggle") { withAnimation { show.toggle() } }
        }
    }
}
