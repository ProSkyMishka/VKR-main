import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai006-n: \(n)")
            Text("ai006-s: " + s)
        }
        .onAppear {
            n = 106
            s = "ai006-name"
        }
    }
}
