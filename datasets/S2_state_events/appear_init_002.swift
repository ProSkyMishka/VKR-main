import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai002-n: \(n)")
            Text("ai002-s: " + s)
        }
        .onAppear {
            n = 102
            s = "ai002-name"
        }
    }
}
