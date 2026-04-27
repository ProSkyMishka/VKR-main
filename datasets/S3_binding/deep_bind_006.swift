import SwiftUI

struct Granddb006: View {
    @Binding var n: Int
    var body: some View {
        Button("db006-deep") { n += 1 }
    }
}

struct Middb006: View {
    @Binding var n: Int
    var body: some View {
        Granddb006(n: $n)
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("db006-root: \(n)")
            Middb006(n: $n)
        }
        .padding()
    }
}
