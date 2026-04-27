import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai008-n: \(n)")
            Text("ai008-s: " + s)
        }
        .onAppear {
            n = 108
            s = "ai008-name"
        }
    }
}
