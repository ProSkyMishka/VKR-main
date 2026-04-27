import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at003-now")
                    .transition(.opacity)
            }
            Button("at003-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
