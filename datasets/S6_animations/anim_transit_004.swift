import SwiftUI

struct ContentView: View {
    @State private var show = false
    var body: some View {
        VStack {
            if show {
                Text("at004-now")
                    .transition(.opacity)
            }
            Button("at004-toggle") {
                withAnimation { show.toggle() }
            }
        }
        .padding()
    }
}
