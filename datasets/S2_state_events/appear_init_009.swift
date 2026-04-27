import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai009-n: \(n)")
            Text("ai009-s: " + s)
        }
        .onAppear {
            n = 109
            s = "ai009-name"
        }
    }
}
