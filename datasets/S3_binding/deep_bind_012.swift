import SwiftUI

struct Granddb012: View {
    @Binding var n: Int
    var body: some View {
        Button("db012-deep") { n += 1 }
    }
}

struct Middb012: View {
    @Binding var n: Int
    var body: some View {
        Granddb012(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db012-root: \(n)")
            Middb012(n: $n)
        }
        .padding()
    }
}
