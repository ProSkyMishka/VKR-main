import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at008-now")
                    .transition(.opacity)
            }
            Button("at008-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
