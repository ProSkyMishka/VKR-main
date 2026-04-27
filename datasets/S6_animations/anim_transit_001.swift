import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at001-now")
                    .transition(.opacity)
            }
            Button("at001-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
