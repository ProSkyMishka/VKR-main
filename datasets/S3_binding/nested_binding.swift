import SwiftUI
struct InnerView: View {
    @Binding var x: Int
    var body: some View { Button("Inner") { x += 1 } }
}
struct MiddleView: View {
    @Binding var x: Int
    var body: some View { InnerView(x: $x) }
}
struct ContentView: View {
    @State private var x = 0
    var body: some View {
        VStack {
            Text("\(x)")
            MiddleView(x: $x)
        }
    }
}
