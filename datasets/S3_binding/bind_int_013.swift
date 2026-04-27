import SwiftUI

struct Childbi013: View {
    @Binding var n: Int
    var body: some View {
        Button("bi013-childInc") { n += 1 }
    }
}

struct ContentView: View {
    @State private var n = 0
    var body: some View {
        VStack {
            Text("bi013-total: \(n)")
            Childbi013(n: $n)
        }
        .padding()
    }
}
