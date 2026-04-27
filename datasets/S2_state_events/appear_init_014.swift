import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai014-n: \(n)")
            Text("ai014-s: " + s)
        }
        .onAppear {
            n = 114
            s = "ai014-name"
        }
    }
}
