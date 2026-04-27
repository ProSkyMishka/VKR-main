import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at006-now")
                    .transition(.opacity)
            }
            Button("at006-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
