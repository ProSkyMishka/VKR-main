import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at005-now")
                    .transition(.opacity)
            }
            Button("at005-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
