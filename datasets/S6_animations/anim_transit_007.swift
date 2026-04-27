import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at007-now")
                    .transition(.opacity)
            }
            Button("at007-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
