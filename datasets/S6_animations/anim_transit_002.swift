import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at002-now")
                    .transition(.opacity)
            }
            Button("at002-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
