import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Text("chip006-label")
                .font(.headline)
                .foregroundColor(.white)
                .padding(.horizontal, 16)
                .padding(.vertical, 12)
                .frame(width: 86, height: 36)
                .background(Color.purple)
                .cornerRadius(18)
                .shadow(radius: 2)
        }
        .padding()
    }
}
