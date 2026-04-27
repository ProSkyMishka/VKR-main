import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip011-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 21)
                .padding(.vertical, 9)
                .frame(width: 91, height: 41)
                .background(Color.purple)
                .cornerRadius(20)
                .shadow(radius: 2)
        }
        .padding()
    }
}
