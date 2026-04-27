import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai003-n: \(n)")
            Text("ai003-s: " + s)
        }
        .onAppear {
            n = 103
            s = "ai003-name"
        }
    }
}
