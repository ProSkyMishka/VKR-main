import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai012-n: \(n)")
            Text("ai012-s: " + s)
        }
        .onAppear {
            n = 112
            s = "ai012-name"
        }
    }
}
