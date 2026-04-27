import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai001-n: \(n)")
            Text("ai001-s: " + s)
        }
        .onAppear {
            n = 101
            s = "ai001-name"
        }
    }
}
