import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai010-n: \(n)")
            Text("ai010-s: " + s)
        }
        .onAppear {
            n = 110
            s = "ai010-name"
        }
    }
}
