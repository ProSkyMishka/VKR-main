import SwiftUI

struct Childbi012: View {
    @Binding var n: Int
    var body: some View {
        Button("bi012-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi012-total: \(n)")
            Childbi012(n: $n)
        }
        .padding()
    }
}
