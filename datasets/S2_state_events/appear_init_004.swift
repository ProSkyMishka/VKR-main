import SwiftUI

struct ContentView: View {
    @State private var n = 0
    @State private var s = ""

    var body: some View {
        VStack {
            Text("ai004-n: \(n)")
            Text("ai004-s: " + s)
        }
        .onAppear {
            n = 104
            s = "ai004-name"
        }
    }
}
