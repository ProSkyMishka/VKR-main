import SwiftUI

struct Granddb013: View {
    @Binding var n: Int
    var body: some View {
        Button("db013-deep") { n += 1 }
    }
}

struct Middb013: View {
    @Binding var n: Int
    var body: some View {
        Granddb013(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db013-root: \(n)")
            Middb013(n: $n)
        }
        .padding()
    }
}
