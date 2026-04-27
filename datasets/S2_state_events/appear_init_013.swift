import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai013-n: \(n)")
            Text("ai013-s: " + s)
        }
        .onAppear {
            n = 113
            s = "ai013-name"
        }
    }
}
