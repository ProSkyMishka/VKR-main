import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai007-n: \(n)")
            Text("ai007-s: " + s)
        }
        .onAppear {
            n = 107
            s = "ai007-name"
        }
    }
}
